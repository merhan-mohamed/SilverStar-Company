"use client";
import { useSearchParams, usePathname, useRouter } from 'next/navigation';




const Search = ({query}) => {  
    const searchParams = useSearchParams();
    const pathName = usePathname();
    const router = useRouter();
    const handleChange = (query) => {
        const params = new URLSearchParams(searchParams)
        if(query){
            params.set('query', query)
        }else{
            params.delete("query");
        }
        router.replace(`${pathName}?${params.toString()}`)
    }

   
  return (
    <div className="text-center mx-auto mb-8 -mt-5">
    <input type="search" placeholder="Search a Product.... "  className="w-1/2"
     onChange={(e) => handleChange(e.target.value)}
     defaultValue={searchParams.get('query')?.toString( )}
    />
    </div>
  )
}

export default Search
