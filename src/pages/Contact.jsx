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

            <div className="mx-auto md:w-[50vw] sm:w-[90vw]">
                <p className="text-amber-50 text-center my-5">
                    You can contact me through: <Link href="mailto:techie@techiepi.dev">e-mail &lt;techie@techiepi.dev&gt;</Link>
                </p>
            </div>
        </div>
    )
}

export default Contact;
