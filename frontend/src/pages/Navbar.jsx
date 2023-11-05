import './Navbar.css';
function Navbar(props) {
    console.log(props);
  return (
    <div className="navbar">
        <div className='title'>
            CodeHelper
        </div>

        <div className='subtopic'>
        <div>
            <a href='/codeforces' style={{
                color: props.pg ? "rgb(159, 242, 159)":"#0f0"
            }}>CodeForces</a>
        </div>
        <div>
            <a href='/leetcode' style={{
                color: props.pg ? "#0f0":"rgb(159, 242, 159)"
            }}>LeetCode</a>
        </div>
        </div>
        
    </div>
  )
}

export default Navbar