import { query as q } from "faunadb";
import { fauna } from "app/services/fauna";

// const getAllTodos = async (req, res) => {
//   console.log("req :", req);
//   //   if (req.method == "GET") {
//   //     let query = await fauna.query(
//   //       q.Map(
//   //         q.Paginate(q.Documents(q.Collection("shows"))),
//   //         q.Lambda((show) => q.Get(show))
//   //       )
//   //     );
//   //     res.status(200).json({ data: query.data });
//   //   }

//   const query = await fauna.query(
//     q.Map(
//       q.Paginate(q.Match("all_todos"), { size: 100 }),
//       q.Lambda("doc", q.Select("data", q.Get(q.Var("doc"))))
//     )
//   );

//   res.status(200).json({ query });
// };

// export default getAllTodos;

export default async function handler(req, res) {
  console.log("CHAMOU A FUNCAO *************");
  if (req.method !== "GET") {
    return res.status(405);
  }
  try {
    const query = await fauna.query(
      q.Map(
        q.Paginate(q.Match("all_todos"), { size: 100 }),
        q.Lambda("doc", q.Select("data", q.Get(q.Var("doc"))))
      )
    );
    console.log("query :", query);
    // return "QWEQWEQWE QWEQWE QWE**************";
    return res.status(200).json(query);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Something went wrong." });
  }
}
