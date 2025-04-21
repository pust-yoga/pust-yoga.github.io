import { db } from "../db.js";

export const getTeachers = (req, res) => {
    const q = "SELECT * FROM teacher ORDER BY firstname DESC";
  
    db.query(q, [], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };

export const getTeacher = (req, res) => {
  const q =
    "SELECT teacher.id, teacher.firstname, teacher.lastname, teacher.picture, teacher.CV FROM teacher WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};