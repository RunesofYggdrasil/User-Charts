"use server";

import { Suspense } from "react";
import fetchAPI from "./api/fetch";
import RelTable from "./components/RelTable";
import Loading from "./components/Loading";

export default async function Home() {
  const getCharactersRequest = await fetchAPI("GET", "characters/chart/1", "");
  const getReltypesRequest = await fetchAPI("GET", "rel_types/chart/1", "");
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RelTable
          characters={getCharactersRequest.characters}
          reltypes={getReltypesRequest.relTypes}
        />
      </Suspense>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum sed
        aliquam rem ipsa incidunt assumenda nemo ad ullam numquam delectus iusto
        odio alias laboriosam totam perspiciatis recusandae impedit,
        voluptatibus architecto. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Eos non provident dolorum illo autem nulla nihil
        doloremque excepturi inventore ipsa, nam quisquam temporibus. Nobis
        beatae, exercitationem hic modi dolores fugit! Lorem ipsum dolor, sit
        amet consectetur adipisicing elit. Explicabo id laudantium dolores
        suscipit? Laborum eius obcaecati corporis provident excepturi, suscipit
        in earum facilis praesentium eum quasi laudantium tenetur quaerat ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
        impedit, labore dolore nemo commodi consequatur facilis ipsam iste hic
        explicabo ratione ab qui ad rerum praesentium quisquam iure adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum, rem
        ratione saepe, nihil sunt maiores modi dolore, officiis laboriosam
        placeat quidem! Natus nobis reiciendis officia. Delectus iusto quam
        accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime, nobis, fugiat molestiae, sit omnis autem ab facilis quia
        explicabo deserunt est iste? Sed modi voluptates aut reprehenderit
        suscipit, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Natus a sed hic voluptate in inventore soluta veniam qui provident
        id molestias perferendis, facilis harum nemo nisi libero suscipit!
        Minus, itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rerum sed aliquam rem ipsa incidunt assumenda nemo ad ullam numquam
        delectus iusto odio alias laboriosam totam perspiciatis recusandae
        impedit, voluptatibus architecto. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Eos non provident dolorum illo autem nulla
        nihil doloremque excepturi inventore ipsa, nam quisquam temporibus.
        Nobis beatae, exercitationem hic modi dolores fugit! Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Explicabo id laudantium dolores
        suscipit? Laborum eius obcaecati corporis provident excepturi, suscipit
        in earum facilis praesentium eum quasi laudantium tenetur quaerat ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
        impedit, labore dolore nemo commodi consequatur facilis ipsam iste hic
        explicabo ratione ab qui ad rerum praesentium quisquam iure adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum, rem
        ratione saepe, nihil sunt maiores modi dolore, officiis laboriosam
        placeat quidem! Natus nobis reiciendis officia. Delectus iusto quam
        accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime, nobis, fugiat molestiae, sit omnis autem ab facilis quia
        explicabo deserunt est iste? Sed modi voluptates aut reprehenderit
        suscipit, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Natus a sed hic voluptate in inventore soluta veniam qui provident
        id molestias perferendis, facilis harum nemo nisi libero suscipit!
        Minus, itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rerum sed aliquam rem ipsa incidunt assumenda nemo ad ullam numquam
        delectus iusto odio alias laboriosam totam perspiciatis recusandae
        impedit, voluptatibus architecto. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Eos non provident dolorum illo autem nulla
        nihil doloremque excepturi inventore ipsa, nam quisquam temporibus.
        Nobis beatae, exercitationem hic modi dolores fugit! Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Explicabo id laudantium dolores
        suscipit? Laborum eius obcaecati corporis provident excepturi, suscipit
        in earum facilis praesentium eum quasi laudantium tenetur quaerat ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
        impedit, labore dolore nemo commodi consequatur facilis ipsam iste hic
        explicabo ratione ab qui ad rerum praesentium quisquam iure adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum, rem
        ratione saepe, nihil sunt maiores modi dolore, officiis laboriosam
        placeat quidem! Natus nobis reiciendis officia. Delectus iusto quam
        accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime, nobis, fugiat molestiae, sit omnis autem ab facilis quia
        explicabo deserunt est iste? Sed modi voluptates aut reprehenderit
        suscipit, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Natus a sed hic voluptate in inventore soluta veniam qui provident
        id molestias perferendis, facilis harum nemo nisi libero suscipit!
        Minus, itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rerum sed aliquam rem ipsa incidunt assumenda nemo ad ullam numquam
        delectus iusto odio alias laboriosam totam perspiciatis recusandae
        impedit, voluptatibus architecto. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Eos non provident dolorum illo autem nulla
        nihil doloremque excepturi inventore ipsa, nam quisquam temporibus.
        Nobis beatae, exercitationem hic modi dolores fugit! Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Explicabo id laudantium dolores
        suscipit? Laborum eius obcaecati corporis provident excepturi, suscipit
        in earum facilis praesentium eum quasi laudantium tenetur quaerat ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
        impedit, labore dolore nemo commodi consequatur facilis ipsam iste hic
        explicabo ratione ab qui ad rerum praesentium quisquam iure adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum, rem
        ratione saepe, nihil sunt maiores modi dolore, officiis laboriosam
        placeat quidem! Natus nobis reiciendis officia. Delectus iusto quam
        accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime, nobis, fugiat molestiae, sit omnis autem ab facilis quia
        explicabo deserunt est iste? Sed modi voluptates aut reprehenderit
        suscipit, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Natus a sed hic voluptate in inventore soluta veniam qui provident
        id molestias perferendis, facilis harum nemo nisi libero suscipit!
        Minus, itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rerum sed aliquam rem ipsa incidunt assumenda nemo ad ullam numquam
        delectus iusto odio alias laboriosam totam perspiciatis recusandae
        impedit, voluptatibus architecto. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Eos non provident dolorum illo autem nulla
        nihil doloremque excepturi inventore ipsa, nam quisquam temporibus.
        Nobis beatae, exercitationem hic modi dolores fugit! Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Explicabo id laudantium dolores
        suscipit? Laborum eius obcaecati corporis provident excepturi, suscipit
        in earum facilis praesentium eum quasi laudantium tenetur quaerat ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
        impedit, labore dolore nemo commodi consequatur facilis ipsam iste hic
        explicabo ratione ab qui ad rerum praesentium quisquam iure adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum, rem
        ratione saepe, nihil sunt maiores modi dolore, officiis laboriosam
        placeat quidem! Natus nobis reiciendis officia. Delectus iusto quam
        accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime, nobis, fugiat molestiae, sit omnis autem ab facilis quia
        explicabo deserunt est iste? Sed modi voluptates aut reprehenderit
        suscipit, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Natus a sed hic voluptate in inventore soluta veniam qui provident
        id molestias perferendis, facilis harum nemo nisi libero suscipit!
        Minus, itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Rerum sed aliquam rem ipsa incidunt assumenda nemo ad ullam numquam
        delectus iusto odio alias laboriosam totam perspiciatis recusandae
        impedit, voluptatibus architecto. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Eos non provident dolorum illo autem nulla
        nihil doloremque excepturi inventore ipsa, nam quisquam temporibus.
        Nobis beatae, exercitationem hic modi dolores fugit! Lorem ipsum dolor,
        sit amet consectetur adipisicing elit. Explicabo id laudantium dolores
        suscipit? Laborum eius obcaecati corporis provident excepturi, suscipit
        in earum facilis praesentium eum quasi laudantium tenetur quaerat ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem error
        impedit, labore dolore nemo commodi consequatur facilis ipsam iste hic
        explicabo ratione ab qui ad rerum praesentium quisquam iure adipisci.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad laborum, rem
        ratione saepe, nihil sunt maiores modi dolore, officiis laboriosam
        placeat quidem! Natus nobis reiciendis officia. Delectus iusto quam
        accusantium. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Maxime, nobis, fugiat molestiae, sit omnis autem ab facilis quia
        explicabo deserunt est iste? Sed modi voluptates aut reprehenderit
        suscipit, sit veniam. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Natus a sed hic voluptate in inventore soluta veniam qui provident
        id molestias perferendis, facilis harum nemo nisi libero suscipit!
        Minus, itaque?
      </p>
    </>
  );
}
