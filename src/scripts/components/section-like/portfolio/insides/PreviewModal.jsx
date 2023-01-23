import React from 'react'

export default function PreviewModal({open}) {
   console.log(open)
   if (!open) return null
   else return (
      <div>
         <img src="" alt="" />
         <div className="preview__data-block data-block">
            hey
         </div>
      </div>
   )
}