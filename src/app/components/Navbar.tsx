/* eslint-disable @next/next/no-img-element */

const NavBar = () => {
    return (
        <>

            <a href="/" className="logffo" target="_blank">
                <h1 className="text-2xl font-extrabold  text-transparent text-center -ml-4 text-yellow-400">Rana Reebaal</h1>
            </a>
<input className="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />

<label htmlFor="menu-icon"></label>
            <nav className="nav">
                <ul className="pt-5">
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/skillspage">Skills</a></li>
                    <li><a href="/project">Project</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </nav>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
        </>
    );
};

export default NavBar;
