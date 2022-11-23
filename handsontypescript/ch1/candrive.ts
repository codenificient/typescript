interface User {
  name: string
  age: number
}

function canDrive(user: User) {
  console.log("user is", user.name)

  if (user.age >= 16) console.log("allowed to drive")
  else console.log("do not allow to drive")
}

const tom : User = {
  name: "Tom",
  age: 15,
}

const jeni : User = {
  name: "Jenny",
  age: 19,
}

canDrive(tom)
canDrive(jeni)
