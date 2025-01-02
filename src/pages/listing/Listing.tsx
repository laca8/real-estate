import Filter from "@/components/listing/Filter"
import Items from "@/components/listing/Items"
import { useState } from "react"
import { data } from '../../types/type'

const Listing = () => {
    const [loc, setLoc] = useState<string>('')
    const [type, setType] = useState<string>('')
    const [sort, setSort] = useState<string>('lth')
    const [price, setPrice] = useState<number>(0)

    return (
        <div>
            <Filter setLoc={setLoc} setType={setType} setSort={setSort} setPrice={setPrice} loc={loc} type={type} sort={sort} price={price} />
            <Items data={data} loc={loc} type={type} sort={sort} price={price} />
        </div>
    )
}

export default Listing