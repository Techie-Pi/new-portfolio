import Link from "../Link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithub, faTwitch, faTwitter} from "@fortawesome/free-brands-svg-icons";

function TopBar() {
    return (
            <div>
                <a href="/">
                    <h1 className="tracking-wide text-center text-[5rem] my-4 dark:text-amber-50 font-thin font-['Lato']">
                        TechiePi
                    </h1>
                </a>

                <div className="text-center my-10">
                    <Link className="px-4 fa-2x" href="https://twitter.com/Techie_Pi"><FontAwesomeIcon icon={faTwitter}/></Link>
                    <Link className="px-4 fa-2x" href="https://www.github.com/Techie-Pi"><FontAwesomeIcon icon={faGithub}/></Link>
                    <Link className="px-4 mr-8 fa-2x" href="https://www.twitch.tv/TechiePi"><FontAwesomeIcon icon={faTwitch}/></Link>
                    <Link className="px-8 fa-2x" blank={false} href="/projects">Projects</Link>
                </div>
            </div>
    )
}

export default TopBar;
