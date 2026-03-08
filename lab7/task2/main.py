from models import Animal, Dog, Cat

# Create objects
animals = [
    Animal("Generic Animal", 5, "brown"),
    Dog("Rex", 3, "black", "German Shepherd"),
    Dog("Buddy", 2, "golden", "Labrador"),
    Cat("Whiskers", 4, "white", indoor=True),
    Cat("Shadow", 6, "black", indoor=False),
]

# Iterate and call methods
print("=== All Animals ===")
for animal in animals:
    print(animal)

print("\n=== Speak (Polymorphism) ===")
for animal in animals:
    print(f"{animal.name}: {animal.speak()}")

print("\n=== Descriptions ===")
for animal in animals:
    print(animal.describe())

print("\n=== Unique Methods ===")
for animal in animals:
    if isinstance(animal, Dog):
        print(animal.fetch())
    elif isinstance(animal, Cat):
        print(animal.purr())
