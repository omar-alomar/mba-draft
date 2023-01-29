import React, { useState, useEffect, useCallback } from 'react'
import Header from '../components/Header';
import Modal from '../components/Modal';
import AddIcon from '@mui/icons-material/Add';
import Button from '../components/Button';
import Announcement from '../components/Announcement';

import { createEditor, Editor, Transforms } from 'slate'
import { Slate, Editable, withReact } from 'slate-react'
// import { BaseEditor, Descendant } from 'slate'
// import { ReactEditor } from 'slate-react'

// type CustomElement = { type: 'paragraph'; children: CustomText[] }
// type CustomText = { text: string }

const initialValue = [
  {
    type: 'paragraph',
    children: [{ text: 'A line of text in a paragraph.' }],
  },
]

const Announcements = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  let [announcements, setAnnouncements] = useState([])

  const [shouldShow, setShouldShow] = useState(false)

  const [editor] = useState(() => withReact(createEditor()))

  
  
  const renderElement = useCallback(props => {
    switch (props.element.type) {
      case 'code':
        return <CodeElement {...props} />
      default:
        return <DefaultElement {...props} />
    }
  }, [])


  let getAnnouncements = async () => {
    let response = await fetch('http://127.0.0.1:8000/api/announcements/')
    let data = await response.json()
    // console.log(data)
    setAnnouncements(data)
  }

  useEffect(() => {
    getAnnouncements()
    console.log(announcements)
  }, [])


  const handleSubmit = () => {
    createAnnouncement();
    // setShouldShow(false)
  }

  let createAnnouncement = async () => {
    fetch('http://127.0.0.1:8000/api/announcements/create/', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ title: title, body: body})
    })
  }

  return (
    <div className="contacts mx-auto w-full">
      <Header Text='Announcements' />
      <div className="m-3 mr-9">
        <Modal type="base" text={<><AddIcon /> new announcement</>} title='Create a new announcement' shouldShow={shouldShow}>
          <form>
            <div className='contacts__form'>
              {/* <label className="contacts__form__label">Name</label> */}

              <div className='flex flex-col space-y-5 mb-5'>

                {/* <div className='flex flex-row space-x-5'>
                  <div className='flex-col'>
                    <input className="contacts__form__input" placeholder='Enter first name...' type="text" />
                    <label className="contacts__form__label__top">First</label>
                  </div>
                  <div className='flex-col'>
                    <input className="contacts__form__input" placeholder='Enter enter last name...' type="text" />
                    <label className="contacts__form__label__top">Last</label>
                  </div>
                </div> */}

                <div>
                  <label className="contacts__form__label">Title</label>
                  {/* <input className="contacts__form__input" placeholder='Enter phone number...' type="tel" onChange={(e) => setTel(e.target.value)} /> */}
                  <input className="contacts__form__input" placeholder='Enter Title...' type="text" onChange={(e) => setTitle(e.target.value)}/>
                </div>

                <div>
                  <label className="contacts__form__label">Body</label>
                  {/* <input className="contacts__form__input" placeholder='Enter email...' type="email" onChange={(e) => setEmail(e.target.value)} /> */}
                  <Slate editor={editor} value={initialValue}>
                    <Editable
                      renderElement={renderElement}
                      onKeyDown={event => {
                        if (event.key === '`' && event.ctrlKey) {
                          // Prevent the "`" from being inserted by default.
                          event.preventDefault()
                          // Otherwise, set the currently selected blocks type to "code".
                          Transforms.setNodes(
                            editor,
                            { type: 'code' },
                            { match: n => Editor.isBlock(editor, n) }
                          )
                        }
                      }}
                    />
                  </Slate>
                  <input className="contacts__form__input" placeholder='Enter announcement...' type="text" onChange={(e) => setBody(e.target.value)}/>

                </div>

              </div>
            </div>
            <hr className='mt-5 mb-5 w-full'></hr>

            <div className='text-right'>
              <Button type="green" text={"Create Announcement"} clickFunction={handleSubmit} className="mb-5 mr-5" />
            </div>
          </form>

        </Modal>
      </div>
      {announcements.map((announcement) => {
          return <Announcement
            title={announcement.title}
            text={announcement.body}
            dateTime={announcement.date}
            key={announcement.id}
            id={announcement.id} />
        })}
    </div>
  )
}

const CodeElement = props => {
  return (
    <pre {...props.attributes}>
      <code>{props.children}</code>
    </pre>
  )
}
const DefaultElement = props => {
  return <p {...props.attributes}>{props.children}</p>
}

export default Announcements