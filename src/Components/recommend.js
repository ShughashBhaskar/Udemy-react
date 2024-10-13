import C1 from "../assests/images/c1.jpg"
import C2 from "../assests/images/c2.jpg"
import C3 from "../assests/images/c3.jpg"
import C4 from "../assests/images/c4.jpg"




function Recommend(){
    return(
        <div class="recom">
        <h1 class="recom__title">Recommended for you</h1>
        <p>Pick the best fit</p>
        <div class="recom__contain">
            <div class="course-card">
                <img src={C1}></img>
                <h3>Python Crash Course</h3>
                <p>Cole man</p>

                <p>4.9⭐⭐⭐⭐</p>

                <p class="course_price">499 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={C2}></img>
                <h3>Java Crash Course</h3>
                <p>Cole man</p>

                <p>4.9⭐⭐⭐⭐</p>

                <p class="course_price">499 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={C3}></img>
                <h3>C Crash Course</h3>
                <p>Cole man</p>

                <p>4.2⭐⭐⭐⭐</p>

                <p class="course_price">499 <del>1999</del></p>
            </div>
            <div class="course-card">
                <img src={C4}></img>
                <h3>HTML Crash Course</h3>
                <p>Cole man</p>

                <p>3.4⭐⭐⭐</p>

                <p class="course_price">499 <del>1999</del></p>
            </div>

        </div>

    </div>
    )
}

export default Recommend;