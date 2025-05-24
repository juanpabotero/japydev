---
id: 'patrones-diseno'
title: 'Patrones de diseño'
description: 'Lorem ipsum dolor sit amet'
pubDate: 'Jan 01 2022'
heroImage: '/design.svg'
---

Los patrones de diseño son soluciones comunes y probadas a problemas comunes.

Se dividen en 3 categorias:

- **Creacionales**: Se encargan de la creación de objetos, ayudan a crear objetos de manera eficiente y
  flexible, ocultando los detalles de instanciacion. Ejemplos: Singleton, Factory, Builder, Prototype,
  Abstract Factory.

- **Estructurales**: Se encargan de la composición de clases y objetos, explican cómo
  ensamblar objetos y clases en estructuras más grandes, a la vez que se mantiene la flexibilidad y
  eficiencia de estas estructuras. Ejemplos: Adapter, Bridge, Composite, Decorator, Facade, Flyweight, Proxy.

- **Comportamiento**: Se encargan de la interacción entre objetos, definen como los objetos interactuan y se
  comunican para cumplir tareas complejas. Ejemplos: Chain of Responsibility, Command, Interpreter,
  Iterator, Mediator, Memento, Observer, State, Strategy, Template Method, Visitor

## Patrones Creacionales

### Patron Singleton

El patrón Singleton es un patrón de diseño creacional que garantiza que solo haya una instancia de una clase
y proporciona un punto de acceso global a ella.

```java
public class Singleton {
    private static Singleton instance;

    private Singleton() {
        // Constructor privado para evitar la creación de instancias desde fuera de la clase
    }

    public static Singleton getInstance() {
        if (instance == null) {
            instance = new Singleton();
        }
        return instance;
    }
}
```

### Patron Factory

El patrón Factory es un patrón de diseño creacional que proporciona una interfaz para crear objetos en una
superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

Permite crear objetos sin especificar la clase exacta que se creará. En lugar de eso, delegamos
la creación de objetos a subclases o métodos que encapsulan esta lógica.  
Es útil cuando una clase no puede anticipar la clase de objetos que debe crear.

```java
public interface Product {
    void operation();
}

public class ProductA implements Product {
    @Override
    public void operation() {
        System.out.println("ProductA operation");
    }
}

public class ProductB implements Product {
    @Override
    public void operation() {
        System.out.println("ProductB operation");
    }
}

public abstract class Factory {
    abstract Product factoryMethod();

    public void someOperation() {
        Product product = this.factoryMethod();
        product.operation();
    }
}

public class FactoryA extends Factory {
    @Override
    public Product factoryMethod() {
        return new ProductA();
    }
}

public class FactoryB extends Factory {
    @Override
    public Product factoryMethod() {
        return new ProductB();
    }
}

public class Main {
    public static void main(String[] args) {
        Factory factory;

        if (true) {
            factory = new FactoryA();
        } else {
            factory = new FactoryB();
        }

        factory.someOperation(); // ProductA operation
    }
}
```

### Patron Abstract Factory

El patrón Abstract Factory es una versión más compleja del patrón Factory que permite crear
familias de objetos relacionados sin especificar sus clases concretas. Agrega un nivel mas de
abstraccion al patron Factory.

En lugar de crear objetos individuales directamente, creamos fabricas que producen un conjunto
de objetos relacionados.

Es útil cuando necesitas crear objetos que son parte de una familia y quieres asegurarte de que
de que estos objetos se complementen entre si.

```java
public interface Vehicule {
    void operation();
}

public class VehiculeA implements Vehicule {
    @Override
    public void operation() {
        System.out.println("VehiculeA operation");
    }
}

public class VehiculeB implements Vehicule {
    @Override
    public void operation() {
        System.out.println("VehiculeB operation");
    }
}

public interface Engine {
    void operation();
}

public class EngineA implements Engine {
    @Override
    public void operation() {
        System.out.println("EngineA operation");
    }
}

public class EngineB implements Engine {
    @Override
    public void operation() {
        System.out.println("EngineB operation");
    }
}

public interface VehiculeFactory {
  Vehicule createVehicule();
  Engine createEngine();
}

public class VehiculeAFactory implements VehiculeFactory {
  @Override
  public Vehicule createVehicule() {
    return new VehiculeA();
  }

  @Override
  public Engine createEngine() {
    return new EngineA();
  }
}

public class VehiculeBFactory implements VehiculeFactory {
  @Override
  public Vehicule createVehicule() {
    return new VehiculeB();
  }

  @Override
  public Engine createEngine() {
    return new EngineB();
  }
}

public class VehiculeFactoryImpl {
  VehiculeFactory vehiculeFactory;

  public void generateFactory(VehiculeFactory vehiculeFactory) {
    this.vehiculeFactory = vehiculeFactory;

    Vehicule vehicule = vehiculeFactory.createVehicule();
    Engine engine = vehiculeFactory.createEngine();

    vehicule.assemble();
    engine.start();
  }
}

public class Main {
    public static void main(String[] args) {
        VehiculeFactoryImpl vehiculeFactory = new VehiculeFactoryImpl();

        if (true) {
            vehiculeFactory.generateFactory(new VehiculeAFactory());
        } else {
            vehiculeFactory.generateFactory(new VehiculeBFactory());
        }
        // VehiculeA operation
        // EngineA operation
    }
}
```

### Patron Builder

El patrón Builder es un patrón de diseño creacional que permite construir objetos complejos paso a paso.
El patrón nos permite producir distintos tipos y representaciones de un objeto empleando el
mismo código de construcción. El patrón Builder separa la construcción de un objeto complejo de
su representación, de modo que el mismo proceso de construcción pueda crear diferentes representaciones.

Se puede crear el patron Builder con Lombok para Java con el @Builder.

```java
public class Product {
    private String attribute1;
    private String attribute2;

    public void setAttribute1(String attribute1) {
        this.attribute1 = attribute1;
    }

    public void setAttribute2(String attribute2) {
        this.attribute2 = attribute2;
    }
}

public interface Builder {
    Product build();
    Builder builder();
    Builder buildAttribute1(String text);
    Builder buildAttribute2(String text);
}

public class ProductBuilder implements Builder {
    private Product product;

    @Override
    public Builder builder() {
        this.product = new Product();
        return this;
    }

    @Override
    public void buildAttribute1(String text) {
        product.setAttribute1(text);
        return this;
    }

    @Override
    public void buildAttribute2(String text()) {
        product.setAttribute2(text);
        return this;
    }

    @Override
    public Product build() {
        return this.product;
    }
}

public class Main {
    public static void main(String[] args) {
        Builder productBuilder = new ProductBuilder();
        Product product = productBuilder.builder()
            .buildAttribute1("Attribute 1")
            .buildAttribute2("Attribute 2")
            .build();
    }
}
```

### Patron Prototype

El patrón Prototype es un patrón de diseño creacional que permite copiar objetos existentes sin
hacer que el código dependa de sus clases.

Es util cuando queremos duplicar cualquier objeto complejo por ejemplo el contenido,
el titulo y el autor de un documento.

```java
public interface Prototype {
    Prototype clone();
}

public class ConcretePrototypeA implements Prototype {
    @Override
    public Prototype clone() {
        return new ConcretePrototypeA();
    }
}

public class ConcretePrototypeB implements Prototype {
    @Override
    public Prototype clone() {
        return new ConcretePrototypeB();
    }
}

public class Main {
    public static void main(String[] args) {
        Prototype prototypeA = new ConcretePrototypeA();
        Prototype prototypeAClone = prototypeA.clone();

        Prototype prototypeB = new ConcretePrototypeB();
        Prototype prototypeBClone = prototypeB.clone();
    }
}
```

## Patrones Estructurales

### Patron Adapter

El patrón Adapter es un patrón de diseño estructural que permite a objetos con interfaces incompatibles
colaborar entre sí. Es muy util para utilizar librerias de terceros en nuestra aplicación sin
depender directamente de ellas, es decir, ayuda a crear una capa de abstracción en medio y no tener
que modificar nuestro código si.

```java
public interface Target {
    void request();
}

public class Adaptee {
    public void specificRequest() {
        System.out.println("Adaptee specificRequest");
    }
}

public class Adapter implements Target {
    private Adaptee adaptee;

    public Adapter(Adaptee adaptee) {
        this.adaptee = adaptee;
    }

    @Override
    public void request() {
        adaptee.specificRequest();
    }
}

public class Main {
    public static void main(String[] args) {
        Target target = new Adapter(new Adaptee());
        target.request();
    }
}
```

### Patron Bridge

El patrón Bridge es un patrón de diseño estructural que permite desacoplar una abstracción de su
implementación, de modo que ambas puedan variar de forma independiente. Permite dividir
una clase grande, o un grupo de clases estrechamente relacionadas, en dos jerarquías separadas
(abstracción e implementación) que pueden desarrollarse independientemente la una de la otra.

Es util cuando se tienen muchas implementaciones de una abstracción. Se puede utilizar para
separar la lógica de negocio de la lógica de presentación.

```java
public interface Implementor {
    void operation();
}

public class ConcreteImplementorA implements Implementor {
    @Override
    public void operation() {
        System.out.println("ConcreteImplementorA operation");
    }
}

public class ConcreteImplementorB implements Implementor {
    @Override
    public void operation() {
        System.out.println("ConcreteImplementorB operation");
    }
}

public abstract class Abstraction {
    protected Implementor implementor;

    public Abstraction(Implementor implementor) {
        this.implementor = implementor;
    }

    public abstract void operation();
}

public class ConcreteAbstractionA extends Abstraction {
    public ConcreteAbstractionA(Implementor implementor) {
        super(implementor);
    }

    @Override
    public void operation() {
        System.out.println("ConcreteAbstractionA operation");
        this.implementor.operation();
    }
}

public class ConcreteAbstractionB extends Abstraction {
    public ConcreteAbstractionB(Implementor implementor) {
        super(implementor);
    }

    @Override
    public void operation() {
        System.out.println("ConcreteAbstractionB operation");
        this.implementor.operation();
    }
}

public class Main {
    public static void main(String[] args) {
        Abstraction abstractionA = new ConcreteAbstractionA(new ConcreteImplementorA());
        abstractionA.operation(); // ConcreteAbstractionA operation
                                  // ConcreteImplementorA operation
        abstractionA = new ConcreteAbstractionA(new ConcreteImplementorB());
        abstractionA.operation(); // ConcreteAbstractionA operation
                                  // ConcreteImplementorB operation

        Abstraction abstractionB = new ConcreteAbstractionB(new ConcreteImplementorB());
        abstractionB.operation(); // ConcreteAbstractionB operation
                                  // ConcreteImplementorB operation
    }
}
```

### Patron Composite

El patrón Composite es un patrón de diseño estructural, permite componer objetos en estructuras de árbol 
para representar jerarquías y trabajar con esas estructuras como si fueran objetos individuales. 
El patrón permite a los clientes tratar los objetos individuales y los compuestos de la misma manera.

Esto simplifica el tratamiento de los objetos creados, ya que al poseer todos ellos una interfaz común,
se tratan todos de la misma manera. Dependiendo de la implementación, pueden aplicarse procedimientos al
total o una de las partes de la estructura compuesta como si de un nodo final se tratara, aunque dicha
parte esté compuesta a su vez de muchas otras.

```java
public interface ComponentComposite {
    void operation();
}

public class Leaf implements ComponentComposite {
    @Override
    public void operation() {
        System.out.println("Leaf operation");
    }
}

public class Composite implements ComponentComposite {
    private List<ComponentComposite> components = new ArrayList<>();

    public void addComponent(ComponentComposite component) {
        components.add(component);
    }

    public void removeComponent(ComponentComposite component) {
        components.remove(component);
    }

    public ComponentComposite getComponent(int index) {
        return components.get(index);
    }

    @Override
    public void operation() {
        System.out.println("Composite operation");
        for (ComponentComposite component : components) {
            component.operation();
        }
    }
}

public class Main {
    public static void main(String[] args) {
        ComponentComposite leaf = new Leaf();
        leaf.operation(); // Leaf operation

        Composite composite = new Composite();
        composite.addComponent(leaf);
        composite.operation(); // Composite operation
                               // Leaf operation
    }
}
```

### Patron Decorator

El patrón Decorator es un patrón de diseño estructural que permite añadir funcionalidades a un objeto
dinámicamente. Es una alternativa flexible a la herencia para extender la funcionalidad de una clase.  
Permite añadir funcionalidades a objetos colocando estos objetos dentro de objetos encapsuladores 
que contienen estas funcionalidades.  
Es util cuando se necesitan añadir funcionalidades a un objeto de forma dinámica y sin afectar a otros
objetos de la misma clase.

```java
public interface Component {
    void operation();
}

public class ConcreteComponent implements Component {
    @Override
    public void operation() {
        System.out.println("ConcreteComponent operation");
    }
}

public abstract class Decorator implements Component {
    protected Component component;

    public Decorator(Component component) {
        this.component = component;
    }
}

public class ConcreteDecoratorA extends Decorator {
    public ConcreteDecoratorA(Component component) {
        super(component);
    }

    @Override
    public void operation() {
        System.out.println("ConcreteDecoratorA operation");
        this.component.operation();
    }
}

public class ConcreteDecoratorB extends Decorator {
    public ConcreteDecoratorB(Component component) {
        super(component);
    }

    @Override
    public void operation() {
        System.out.println("ConcreteDecoratorB operation");
        this.component.operation();
    }
}

public class Main {
    public static void main(String[] args) {
        Component component = new ConcreteComponent();
        component.operation(); // ConcreteComponent operation

        Component decoratorA = new ConcreteDecoratorA(component);
        decoratorA.operation(); // ConcreteDecoratorA operation
                                // ConcreteComponent operation

        Component decoratorB = new ConcreteDecoratorB(decoratorA);
        decoratorB.operation(); // ConcreteDecoratorB operation
                                // ConcreteDecoratorA operation
                                // ConcreteComponent operation
    }
}
```

### Patron Facade

El patrón Facade es un patrón de diseño estructural que proporciona una interfaz simplificada a una biblioteca,
un framework o cualquier conjunto complejo de clases.

```java
public class SubsystemA {
    public void operationA() {
        System.out.println("SubsystemA operationA");
    }
}

public class SubsystemB {
    public void operationB() {
        System.out.println("SubsystemB operationB");
    }
}

```

## Patrones Comportamiento

### Patron Observer

El patrón Observer es un patrón de diseño de comportamiento que permite a un objeto, llamado sujeto,
notificar a otros objetos, llamados observadores, cuando cambia su estado.

```java
public abstract class Subject {
    protected List<Observer> observers = new ArrayList<>();

    public void addObserver(Observer observer) {
        observers.add(observer);
    };
    public void removeObserver(Observer observer) {
        observers.remove(observer);
    };
    public void notifyObservers() {
        for (Observer obs : this.observers) {
            obs.update(this);
        }
    };
}

public interface Observer {
    void update(Subject subject);
}

public class ConcreteSubject extends Subject {
    private String state;

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
        this.notifyObservers();
    }
}

public class ConcreteObserverA implements Observer {
    @Override
    public void update(Subject subject) {
        System.out.println("ConcreteObserverA update");
    }
}

public class ConcreteObserverB implements Observer {
    @Override
    public void update(Subject subject) {
        System.out.println("ConcreteObserverB update");
    }
}

public class Main {
    public static void main(String[] args) {
        ConcreteSubject subject = new ConcreteSubject();
        subject.addObserver(new ConcreteObserverA());
        subject.addObserver(new ConcreteObserverB());

        subject.setState("state");
    }
}
```

### Patron Strategy

El patrón Strategy es un patrón de diseño de comportamiento que permite tener multiples metodos
para resolver un mismo problema y se elige dinamicamente segun el contexto.

```java
public interface Strategy {
    void algorithm();
}

public class ConcreteStrategyA implements Strategy {
    @Override
    public void algorithm() {
        System.out.println("ConcreteStrategyA algorithm");
    }
}

public class ConcreteStrategyB implements Strategy {
    @Override
    public void algorithm() {
        System.out.println("ConcreteStrategyB algorithm");
    }
}

public class Context {
    private Strategy strategy;

    public Context(Strategy strategy) {
        this.strategy = strategy;
    }

    public void setStrategy(Strategy strategy) {
        this.strategy = strategy;
    }

    public void execute() {
        strategy.algorithm();
    }
}

public class Main {
    public static void main(String[] args) {
        Context context = new Context(new ConcreteStrategyA());
        context.execute();

        context.setStrategy(new ConcreteStrategyB());
        context.execute();
    }
}
```

