import React, { useState } from 'react';
import './App.css';
import SearchComponent from './SearchComponent';
import ShowCourseComponent from './ShowCourseComponent';
import UserCartComponent from './UserCartComponent';
 
function App() {
    const [courses, setCourses] = useState([
        { id: 1, 
          name: 'shoe', 
          price: 900, 
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzi32BxsTM25ZXPWDGBvETobXyQe0GSMkm7r5RFb3KE89Qb57oyq2yaBLUePYPeee7V4c&usqp=CAU'
        },
        { id: 2, 
          name: 'shirt', 
          price: 699, 
          image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE3z9YX09cq42Pal2GH8dGvyh5gceaEnepKw&usqp=CAU'
        },
        { id: 3, 
          name: 'pant', 
          price: 799, 
          image:'https://i5.walmartimages.com/asr/1a16529f-15cb-4229-941d-3de7891f314f.6281a7658d5b57e411b4a7152e1ad4fd.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
        }
    ]);
 
    const [cartCourses, setCartCourses] = useState([]);
    const [searchCourse, setSearchCourse] = useState('');
 
    const addCourseToCartFunction = (GFGcourse) => {
        const alreadyCourses = cartCourses
                               .find(item => item.product.id === GFGcourse.id);
        if (alreadyCourses) {
            const latestCartUpdate = cartCourses.map(item =>
                item.product.id === GFGcourse.id ? { 
                ...item, quantity: item.quantity + 1 } 
                : item
            );
            setCartCourses(latestCartUpdate);
        } else {
            setCartCourses([...cartCourses, {product: GFGcourse, quantity: 1}]);
        }
    };
 
    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };
 
    const totalAmountCalculationFunction = () => {
        return cartCourses
               .reduce((total, item) => 
                           total + item.product.price * item.quantity, 0);
    };
 
    const courseSearchUserFunction = (event) => {
        setSearchCourse(event.target.value);
    };
 
    const filterCourseFunction = courses.filter((course) =>
        course.name.toLowerCase().includes(searchCourse.toLowerCase())
    );
 
    return (
        <div className="App">
            <SearchComponent searchCourse={searchCourse} 
                             courseSearchUserFunction=
                                 {courseSearchUserFunction} />
            <main className="App-main">
                <ShowCourseComponent
                    courses={courses}
                    filterCourseFunction={filterCourseFunction}
                    addCourseToCartFunction={addCourseToCartFunction}
                />
 
                <UserCartComponent
                    cartCourses={cartCourses}
                    deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                    totalAmountCalculationFunction={
                        totalAmountCalculationFunction
                    }
                    setCartCourses={setCartCourses}
                />
            </main>
        </div>
    );
}
 
export default App;