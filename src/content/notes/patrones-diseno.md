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

- **Estructurales**: Se encargan de la composición de clases y objetos, enfocados en como componer clases
  u objetos para formar estructuras mas grandes y reutilizables. Ejemplos: Adapter, Bridge, Composite,
  Decorator, Facade, Flyweight, Proxy

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

El patrón Abstract Factory es una versión más compleja del patrón Factory que permite crear familias de
objetos relacionados sin especificar sus clases concretas. Agrega un nivel mas de abstraccion al patron Factory.

```java
public interface Product {
    void operation();
}

public class ConcreteProductA implements Product {
    @Override
    public void operation() {
        System.out.println("ConcreteProductA operation");
    }
}

public class ConcreteProductB implements Product {
    @Override
    public void operation() {
        System.out.println("ConcreteProductB operation");
    }
}

public abstract class Creator {
    public abstract Product factoryMethod();

    public void someOperation() {
        Product product = factoryMethod();
        product.operation();
    }
}

public class ConcreteCreatorA extends Creator {
    @Override
    public Product factoryMethod() {
        return new ConcreteProductA();
    }
}

public class ConcreteCreatorB extends Creator {
    @Override
    public Product factoryMethod() {
        return new ConcreteProductB();
    }
}

public class Main {
    public static void main(String[] args) {
        Creator creatorA = new ConcreteCreatorA();
        creatorA.someOperation();

        Creator creatorB = new ConcreteCreatorB();
        creatorB.someOperation();
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
    private String attribute3;

    public void setAttribute1(String attribute1) {
        this.attribute1 = attribute1;
    }

    public void setAttribute2(String attribute2) {
        this.attribute2 = attribute2;
    }

    public void setAttribute3(String attribute3) {
        this.attribute3 = attribute3;
    }
}

public interface Builder {
    void buildAttribute1();
    void buildAttribute2();
    void buildAttribute3();
    Product getProduct();
}

public class ConcreteBuilder implements Builder {
    private Product product = new Product();

    @Override
    public void buildAttribute1() {
        product.setAttribute1("Attribute 1");
    }

    @Override
    public void buildAttribute2() {
        product.setAttribute2("Attribute 2");
    }

    @Override
    public void buildAttribute3() {
        product.setAttribute3("Attribute 3");
    }

    @Override
    public Product getProduct() {
        return product;
    }
}

public class Director {
    public void construct(Builder builder) {
        builder.buildAttribute1();
        builder.buildAttribute2();
        builder.buildAttribute3();
    }
}

public class Main {
    public static void main(String[] args) {
        Builder builder = new ConcreteBuilder();
        Director director = new Director();
        director.construct(builder);
        Product product = builder.getProduct();
    }
}
```

## Patrones Estructurales

### Patron Adapter

El patrón Adapter es un patrón de diseño estructural que permite a objetos con interfaces incompatibles
colaborar entre sí.

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

### Patron Composite

El patrón Composite es un patrón de diseño estructural, sirve para construir objetos complejos a partir
de otros más simples y similares entre sí, gracias a la composición recursiva y a una estructura
en forma de árbol.

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
        leaf.operation();

        Composite composite = new Composite();
        composite.addComponent(leaf);
        composite.operation();
    }
}
```

### Patron Decorator

El patrón Decorator es un patrón de diseño estructural que permite añadir funcionalidades a un objeto
dinámicamente. Es una alternativa flexible a la herencia para extender la funcionalidad de una clase.

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
        component.operation();
    }
}

public class ConcreteDecoratorB extends Decorator {
    public ConcreteDecoratorB(Component component) {
        super(component);
    }

    @Override
    public void operation() {
        System.out.println("ConcreteDecoratorB operation");
        component.operation();
    }
}

public class Main {
    public static void main(String[] args) {
        Component component = new ConcreteComponent();
        component.operation();

        Component decoratorA = new ConcreteDecoratorA(component);
        decoratorA.operation();

        Component decoratorB = new ConcreteDecoratorB(decoratorA);
        decoratorB.operation();
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
