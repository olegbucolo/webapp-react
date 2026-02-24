import FilmsSection from "../components/FilmsSection"

export default function HomePage({films}){
    return (
        <div>
            <h1>MAIN PAGE</h1>
            <FilmsSection films={films}/>
        </div>
    )
}