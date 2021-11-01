import { useEffect, useState } from "react"

const usePackages = () => {
    const [packages, setPackages] = useState([]);
    useEffect( () => {
        fetch('https://footprints-node-server.herokuapp.com/packages')
        .then(res => res.json())
        .then(data => setPackages(data))
    }, [packages])

    return { packages, setPackages}
}
export default usePackages;