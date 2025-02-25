import { z } from 'zod';

const signupSchema = z.object({
  email: z.string().email({ message: 'Correo Inválido' }),
  password: z.string().min(6, { message: 'Contraseña debe tener al menos 6 caracteres' }),
  username: z.string().min(3,{ message: 'Nombre de usuario es requerido' }),
});


export function validateBookSchema(object){

    return signupSchema.safeParse(object);
}

/*if (!validation.success) {
    return res.status(400).json({
      success: false,
      message: validation.error.errors.map((err) => err.message).join(', '),
    });
}
    

 if (!result.success) {
        return res.status(400).send(result.error);
}

// api/v2/auth/signup

export async function signup(req, res) {
  try {
    const validation = signupSchema.safeParse(req.body);

    if (!validation.success) {
      return res.status(400).json({
        success: false,
        message: validation.error.errors.map((err) => err.message).join(', '),
      });
    }

    const { email, password, username } = validation.data;

    const existingUserByEmail = await User.findOne({ email: email });

    if (existingUserByEmail) {
      return res
        .status(400)
        .json({ success: false, message: 'Email already exists' });
    }

    const existingUserByUsername = await User.findOne({ username: username });

    if (existingUserByUsername) {
      return res
        .status(400)
        .json({ success: false, message: 'Username already exists' });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const PROFILE_PICS = ['/avatar1.png', '/avatar2.png', '/avatar3.png'];

    const image = PROFILE_PICS[Math.floor(Math.random() * PROFILE_PICS.length)];

    const newUser = new User({
      email,
      password: hashedPassword,
      username,
      image,
    });

    generateTokenAndSetCookie(newUser._id, res);
    await newUser.save();

    res.status(201).json({
      success: true,
      user: {
        ...newUser._doc,
        password: '',
      },
    });
  } catch (error) {
    console.log('Error in signup controller', error.message);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
}


*/