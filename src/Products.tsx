import { useEffect, useState } from "react";

type Product = {
  // category: {
  //   image: string;
  //   name: string;
  // };
  title: string;
  price: number;
  category: string;
  image: string;
};

function Products() {
  const [products, setProduct] = useState<Product[]>([]);

  //   useEffect(() => {
  //     const fetchData = () => {
  //       // fetch("https://fakestoreapi.com/products");
  //       fetch("https://api.escuelajs.co/api/v1/products")
  //         .then((res) => res.json())
  //         .then((data) => {
  //           setProduct(data);
  //           console.log(data);
  //         })
  //         .catch((err:any) => console.log(err));
  //     };
  //     fetchData();
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          // "https://api.escuelajs.co/api/v1/products"
          "https://fakestoreapi.com/products"
        );
        const data = await response.json();
        setProduct(data);
        console.log(data);
      } catch (error: any) {
        console.log("Error fetching products:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <section className="space-y-5 w-[90%]">
      <h1 className="text-3xl font-bold text-center">Products</h1>
      {/* "https://api.escuelajs.co/api/v1/products" */}
      {/* <section className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <figure className="">
            <img
              src={product.category.image}
              alt={product.title}
              className="h-[30vh] w-full"
            />
            <figcaption>{product.category.name}</figcaption>
            <figcaption>{product.title}</figcaption>
            <p>${product.price}</p>
          </figure>
        ))}
      </section> */}

      {/* "https://fakestoreapi.com/products" */}
      <section className="grid grid-cols-3 gap-3">
        {products.map((product) => (
          <figure className="border-2 border-gray-400 h-full rounded-xl bg-gray-100">
            <img
              src={product.image}
              alt={product.title}
              className="h-[35vh] w-full object-contain pt-2"
            />
            <figcaption className="text-center p-1.5 space-y-1 text-sm">
              <strong>{product.category}</strong>
              <p>{product.title}</p>
              <strong>${product.price}</strong>
            </figcaption>
          </figure>
        ))}
      </section>
    </section>
  );
}

export default Products;
