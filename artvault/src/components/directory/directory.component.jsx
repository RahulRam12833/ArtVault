import {DirectoryContainer,DirectoryHeader,DirectoryEyebrow,DirectoryTitle,DirectoryList,CategoryRow,CategoryName,CategoryNumber} from './directory.styles';
import CategoryItem from '../category-item/category-item-component';

const categories=[
    {id:1, name: 'Paintings',imageUrl:'https://images.unsplash.com/photo-1533208087231-c3618eab623c',route:'shop/paintings'},
    {id: 2, name: 'Sculptures',imageUrl:'https://images.unsplash.com/photo-1574254706427-213d446e2f2b',route:'shop/sculptures'},  
    {id: 3, name: 'Photography',imageUrl:'https://images.unsplash.com/photo-1603467928390-c4b320c8b0ea',route:'shop/photography'},
    {id: 4, name: 'Digital Art',imageUrl:'https://images.unsplash.com/photo-1617396900799-f4ec2b43c7ae',route:'shop/digital'},
    {id: 5, name: 'Drawings',imageUrl:'https://images.unsplash.com/photo-1625212895824-ff2232e9f304',route:'shop/drawings'},
]  

const Directory = () => {
    return (
        <DirectoryContainer>

            <DirectoryHeader>
                <DirectoryEyebrow>
                    01 / The COLLECTION
                </DirectoryEyebrow>

                <DirectoryTitle initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: false, amount: 0.4 }}
    transition={{
      duration: 0.7,
      ease: 'easeOut',
    }}>
                    Explore art across
                    <br/>
                    different mediums.
                </DirectoryTitle>
            </DirectoryHeader>  

            <DirectoryList>
                {categories.map((category,index) => (
          <CategoryItem key={category.id} category={category} index={index} />
         ))}  
            </DirectoryList>
    </DirectoryContainer>
    )
}

export default Directory;