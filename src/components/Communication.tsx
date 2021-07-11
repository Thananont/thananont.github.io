import React, { useState } from 'react'

export default function Communication() {
  const [open, setOpen] = useState(false)

  return (
    <div className='container skills'>
      <button type="button" className="dropbutton" onClick={() => setOpen(!open)}>
        test
      </button>
      {open && (
        <div className="dropdown">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
      )}
      <button type="button" className="dropbutton" onClick={() => setOpen(!open)}>
        test
      </button>
      <button type="button" className="dropbutton" onClick={() => setOpen(!open)}>
        test
      </button>
      <button type="button" className="dropbutton" onClick={() => setOpen(!open)}>
        test
      </button>
    </div>
  )
}