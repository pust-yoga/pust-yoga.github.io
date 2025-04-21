import { db } from "../db.js";

// This function gets all activities for a given teacher ID.
// Expected route parameter: req.params.teacherId
export const getActivitiesByTeacher = (req, res) => {
  const q = `
    SELECT 
      a.id, 
      a.name, 
      a.expertise_level, 
      a.description, 
      a.picture, 
      a.practical_information
    FROM activity a
    JOIN teacher_activity ta ON a.id = ta.acitvityid
    WHERE ta.teacherid = ?;
  `;
  
  db.query(q, [req.params.teacherId], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};

// This function gets all teachers for a given activity ID.
// Expected route parameter: req.params.activityId
export const getTeachersByActivity = (req, res) => {
  const q = `
    SELECT 
      t.id, 
      t.firstname, 
      t.lastname, 
      t.picture, 
      t.CV
    FROM teacher t
    JOIN teacher_activity ta ON t.id = ta.teacherid
    WHERE ta.acitvityid = ?;
  `;
  
  db.query(q, [req.params.activityId], (err, data) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).json(data);
  });
};