import Image from 'next/image'
export default function ImageHolder(){   
   

    return(
        <>
        <a className='group hover:opacity-70 transition-opacity'>
            <div >
                <Image
                    src=""
                    // width={}

                />
                <img src='./public/vercel.svg'/>
                <p>Placeholder text1</p>
                <p>PlaceHolder text2</p>
            </div>
        </a>
        </>
    )
}