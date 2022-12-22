import './category-item.styles.scss';

const CategoryItem = ({ category }) => {
  const { imageUrl, title } = category;
  return (
    <div className='category-container'>
      <div
        className='background-image'
        style={{
          background: `url(${imageUrl})`,
          border: '1px solid red',
        }}
      />
      <div className='category-body-container'>
        <h2>{title}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
