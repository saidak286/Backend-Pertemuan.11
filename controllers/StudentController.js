// TODO 3: Import data students dari folder data/students.js
// code here
const student = require("../data/students");

// buat Class Student Controller
class StudenController {
    index(req, res) {
        const data = {
            message: "Menampilkan semua students",
            data: student,
        };
        
        return res.json(data);
    }

    store(req, res) {
        const { nama } = req.body;
        
        student.push(nama);

        const data = {
            message: "Menambahkan data student " + nama,
            data: student,
        };

        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;

        student[id] = nama;

        const data = {
            message: "Mengedit data student id " + id + nama,
            data: student,
        };

        res.json(data);
    }

    destroy(req, res) {
        const { id } = req.params;

        student.splice(id, 1);

        const data = {
            message: "Menghapus data student id " + id,
            data: student,
        };

        res.json(data);
    }
}

// buat object
const object = new StudenController();

// export
module.exports = object;