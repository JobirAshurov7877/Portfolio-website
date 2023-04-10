import { useState } from 'react';
import './portfolio.css'
const FilterBtn = ({buttons,filter}) => {
     const [selectedCategory, setSelectedCategory] = useState('All');
     console.log(selectedCategory)

     const selectedCategoryHandler = category => setSelectedCategory(category)
     
 
     return (
          <div className='filterBtn-box'>
               {buttons.map((btn,index) => (
                    <button type='button' key={index} className={'filterBtn '}
                     onClick={()=>{filter(btn) 
                     selectedCategoryHandler(btn)}}
                     style={{border: btn === selectedCategory && '1px  solid #ddd'}}
                     > 
                    {btn} 
                    </button>
               ))}
          </div>
     )
}

export default FilterBtn
