require("dotenv").config();

const express = require("express");
const app = express();
const connectDB = require("./db");
const mongoose = require("mongoose");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();

app.get("/", (req, res) => {
    res.send("Hello");
})

// ==================== Student Model =================================

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    course: {
        type: String,
    },
    age: {
        type: Number,
        required: false,
    }
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
// ==================== Create Route ===================================

app.post("/api/students", async (req, res) => {
    try {
        const { name, email, course, age } = req.body;

        if (!name || !email) {
            return res.status(400).json({
                message: "Name and email are required fields",
            });
        }

        if (email) {
            const existingStudent = await Student.findOne({ email });
            if (existingStudent) {
                return res.status(400).json({
                    message: "Email already exist",
                });
            }

            const student = await Student.create({
                name,
                email,
                course,
                age,
            });
            res.status(201).json({
                messsage: "Studnent created succesfully",
                student,
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});

// ===================== Get all students ===================================

app.get("/api/students", async (req, res) => {
    try {
        const student = await Student.find();
        res.status(200).json({
            message: "All students fetched succesfully",
            student,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
})

// ====================== Get student by id ==============================================

app.get("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            })
        } else {
            res.status(200).json({
                message: "Student fetched succesfully",
                student,
            })
        }
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
})

// ====================== Update Student by id ===================================================

app.put("/api/students/:id", async (req, res) => {
    try {

        const { name, email, course, age } = req.body;

        const student = await Student.findByIdAndUpdate(
            req.params.id,
            {
                name,
                email,
                course,
                age
            },
            { new: true },
        );

        res.status(200).json({
            message: "Student updated succesfully",
            student,
        })
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
})

// ======================= Delete Student by id =========================================================

app.delete("/api/students/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);

        if (!student) {
            return res.status(404).json({
                message: "Student not found",
            });
        }

        res.status(200).json({
            message: "Student deleted successfully",
            student,
        });
    } catch (err) {
        res.status(500).json({
            message: err.message,
        })
    }
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running on ${process.env.PORT}`);
})