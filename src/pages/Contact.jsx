import TopBar from "../components/TopBar";
import Title from "../components/Title";
import Link from "../components/Link";

function Contact() {
    return (
        <div>
            <TopBar/>
            <div className="flex justify-center mb-10">
                <hr className="md:w-[30vw] sm:w-[80vw] block"/>
            </div>
            <Title>Contact</Title>

            <div className="mx-auto text-center md:w-[50vw] sm:w-[90vw]">
                <p className="text-amber-50 block ml-auto my-5">
                    <ul>
                        <li>e-mail <Link href="mailto:techie@techiepi.dev">&lt;techie@techiepi.dev&gt;</Link></li>
                        <li>twitter <Link href="https://twitter.com/Techie_Pi">@Techie_Pi</Link></li>
                    </ul>
                </p>
            </div>
        </div>
    )
}

export default Contact;
