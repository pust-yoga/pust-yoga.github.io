import { db } from "../db.js";

export const getActivities = (req, res) => {
    const q = "SELECT * FROM activity ORDER BY name DESC";
  
    db.query(q, [], (err, data) => {
      if (err) return res.status(500).send(err);
  
      return res.status(200).json(data);
    });
  };

export const getActivity = (req, res) => {
  const q =
    "SELECT activity.id, activity.name, activity.expertise_level, activity.description, activity.picture, activity.practical_information FROM activity WHERE id = ?";

  db.query(q, [req.params.id], (err, data) => {
    if (err) return res.status(500).json(err);

    return res.status(200).json(data[0]);
  });
};