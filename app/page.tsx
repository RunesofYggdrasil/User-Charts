import RelTable from "./components/RelTable";
import RelTypeButton from "./components/RelTypeButton";

export default function Home() {
  return (
    <>
      <RelTable
        characters={[
          { id: 0, firstName: "John", lastName: "Egbert" },
          { id: 1, firstName: "Jade", lastName: "Harley" },
          { id: 3, firstName: "Dave", lastName: "Strider" },
          { id: 4, firstName: "Rose", lastName: "Lalonde" },
        ]}
        reltypes={[
          { id: 0, name: "Flushed", hexCode: "FF0000", textCode: "000000" },
          { id: 1, name: "Pitch", hexCode: "000000", textCode: "FFFFFF" },
          { id: 3, name: "Pale", hexCode: "FF6666", textCode: "000000" },
        ]}
      />
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
