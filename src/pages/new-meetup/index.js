import NewMeetupForm from "@/components/meetups/NewMeetupForm"
import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";


const NewMeetUp = () => {

    const router = useRouter()

    const addMeetupHandler = async (enteredMeetupData) => {
       const response = await fetch('/api/new-meetup', {
        method: 'POST',
        body: JSON.stringify(enteredMeetupData),
        headers: {
            'Content-Type': 'application/json'
        }
       });

       const data = await response.json();

       console.log(data);

       router.push('/')
    };

    return <Fragment>
        <Head>
            <title>Add Meetup Page</title>
            <meta name="description" content="add new meetu[p details on here" />
        </Head>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </Fragment>;
}

export default NewMeetUp;