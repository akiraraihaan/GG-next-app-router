export const getData = async (url: string) => {
  // const res = await fetch('https://fakestoreapi.com/products', {
  //   cache: 'no-store'
  // });
  const res = await fetch(url , {
    cache: 'force-cache',
    next: {
      // revalidate: 30,
      tags: ['products']
    }
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data.")
  }

  return res.json();
}