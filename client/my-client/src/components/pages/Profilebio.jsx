import React from 'react'

export default function Profilebio({UserProfile}) {
  return (
    <div>
      <div>
       {
        UserProfile?.tags ? (
            <>
             <h4>Tag watched</h4>
             {
                UserProfile?.tags.map((tags) => (
                <p key={tags}>{tags}</p>
                ))
             }

            </>
        ) : (
           <p>0 tags watched </p> 
        )
       }

       <div>
        {
            UserProfile?.about ? (
                <>
                <h4>about</h4>
                 <p>{UserProfile?.about}</p>
                </>
            ) : (
                <p>no bio founds</p>
            )
        }
       </div>

      </div>
    </div>
  )
}
