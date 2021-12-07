import { query as q } from "faunadb";
import { deleteTask, fauna, getAllTasks, updateTask } from "app/services/fauna";

const tasks = async (req, res) => {
  if (req.method == "POST") {
    const query = await fauna.query(
      q.Create(q.Collection("to-dos"), { data: req.body })
    );
    res.status(200).json(query);
  }

  if (req.method === "DELETE") {
    const query = await deleteTask(req.body);
    res.status(200).json({ data: query });
  }

  if (req.method == "GET") {
    const query = await getAllTasks();
    res.status(200).json(query);
  }

  if (req.method == "PUT") {
    const query = await updateTask(req.body);
    res.status(200).json(query);
  }
};

export default tasks;
