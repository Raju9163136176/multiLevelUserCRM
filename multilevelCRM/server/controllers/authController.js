import User from "../models/user.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    try {
        const { username, password, role, email, companyName, state, city, country, phoneNumber } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({
            username,
            password: hashedPassword,
            role,
            email,
            companyName,
            state,
            city,
            country,
            phoneNumber
        });
        await newUser.save();
        res.status(201).json({ message: `User has registered: ${username}` });
    } catch (error) {
        res.status(500).json({ message: `User registration failed ${error}` });
    }
};

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: `User with username ${username} not found or not registered` });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = jwt.sign(
            { id: user._id, role: user.role },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        return res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: "Login failed" });
    }
};
