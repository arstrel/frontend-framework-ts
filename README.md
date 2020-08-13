# frontend-framework-ts

Frontend framework with TypeScript

Consist of two parts:

1. Model Classes

- Handle data, used to represent Users, Blog, Posts, Images and so on

2. View Classes

- Handle the HTML and events caused by the user (like clicks)

---

## User class

- Represent a User and all if its data
- Needs to have the ability to store some data, retrieve it, and change it
- Needs to have the ability to notify the rest of the app when some data is changed
- User needs to bea ble to persist data to an outside server and retrieve it as some future point

## View class

- Handle Buttons
- Handle clicks

---

## Plan:

"Extraction approach:"

1. Build the user as a "mega" class with tons of methods

- private data
- get(propName)
- set(propName)
- on(event)
- trigger(event)
- fetch
- save

2. Refactor User to use composition
3. Refactor User to be a reusable class that can represent any piece of data, not just a User
