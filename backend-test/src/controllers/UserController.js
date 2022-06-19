const UserModel = require("../models/UserModel");

const findAll = async (request, response) => {
  try {
    const result = await UserModel.find()
    response.status(200).json(result)
  } catch (error) {
    response.status(500).json(error)
  };
};

const register = async (request, response) => {
  const { firstName, lastName, email, hashedPassword } = req.body

  const user = new UserModel({
    firstName, lastName, email, hashedPassword
  })
  try {
    const result = await user.save()
    response.status(201).json({
      result,
    })
  } catch (error) {
    response.status(500).json(error)
  }
}

const login = async (request, response) => {
  const { email, hashedPassword } = req.body

  const connexionForToken = new UserModel({
    email, hashedPassword
  })
  try {
    const result = await connexionForToken.save()
    response.status(201).json({
      result,
    })
  } catch (error) {
    response.status(500).json(error)
  }
}

// const search = async (request, response) => {
//   const { message } = request.query
//   try {
//     const result = await UserModel.find({ TODO })
//     if (result.length){
//       response.status(200).json({
//         result,
//       })
//     } else {
//       response.status(404).json({ TODO })
//     }
//   } catch (error) {
//     response.status(500).json(error)
//   }
// }
