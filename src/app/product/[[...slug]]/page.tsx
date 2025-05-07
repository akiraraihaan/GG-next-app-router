import React from 'react'
type DetailProductPageProps = { params: { slug: string[] } };

const DetailProductPage = ( props: DetailProductPageProps ) => {
  const {params} = props;
  return (
    <>
      <div>Detail Product Page</div>
      {params.slug &&
      <div>
        <h2>kategori: {params.slug[0]}</h2>
        <h2>kelamin: {params.slug[1]}</h2>
        <h2>produk: {params.slug[2]}</h2>
      </div>}
    </>
  )
}

export default DetailProductPage