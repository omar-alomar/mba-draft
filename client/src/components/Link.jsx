import React, {useState, useEffect} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleIcon from "@mui/icons-material/Circle";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';

const Link = ({link}) => {
  const [links, setLinks] = useState([]);
  const [name, setName] = useState(link.name)
  const [url, setUrl] = useState(link.url);
  const [shouldShow, setShouldShow] = useState(false);
  const navigate = useNavigate()
  

  let editLink = async () => {
    fetch(`http://127.0.0.1:8000/api/links/${link.id}/edit/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        url: url
      })
    })
  }
  
  let deleteLink = async ()=> {
    fetch(`http://127.0.0.1:8000/api/links/${link.id}/delete/`, {
      method:'DELETE',
      'headers': {
        'Content-Type': 'application/json'  
      }
    })
  }
  
  let handleEdit = () => {
    editLink()
    navigate(0)
  }

  let handleDelete = () => {
    deleteLink()
    navigate(0)
  }

  const handleCancel = () => {
    setShouldShow(false)
    navigate(0)
  }

  return (
    <>
      <div className="flex flex-row">
        <CircleIcon sx={{fontSize: 7}} className="my-auto mr-3 ml-1" />
        <span className="text-xl my-auto">{link.name}:</span>&nbsp;
        <span className="my-auto text-l text-blue-500 underline">
          <a href={link.url}>{link.url}</a>
        </span>
        <div className="text-right justify-end ml-auto mr-1">
          <span>
            <Modal
              type="none"
              text={
                <span className="text-gray-500 hover:text-yellow-500 cursor-pointer">
                  <EditIcon />
                </span>
              }
              title="Edit Link"
              shouldShow={shouldShow}
            >
              <form className="contacts__form">
                <div className="flex flex-col space-y-5 mb-5">
                  <div>
                    <label className="contacts__form__label">Name</label>
                    <input
                      className="contacts__form__input"
                      value={name}
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="contacts__form__label">URL</label>
                    <input
                      className="contacts__form__input"
                      value={url}
                      type="text"
                      onChange={(e) => setUrl(e.target.value)}
                    />
                  </div>
                </div>
              </form>
              <hr className="mt-5 mb-5 w-full"></hr>

              <div className="text-right">
                <Button
                  type="yellow"
                  text={"Edit link"}
                  clickFunction={handleEdit}
                  className="mb-5 mr-5"
                />
              </div>
            </Modal>
          </span>
          <span>
            <Modal type="none" text={<div className='text-gray-500 hover:text-red-500'><DeleteIcon /></div>} title='Delete Link' shouldShow={shouldShow}>
              <form>
                <label className="contacts__form__label text-left mt-8 mb-7 ml-5 mr-36">Are you sure you want to delete this link?</label>

                <hr className='mt-5 mb-5 w-full'></hr>
                <div className='flex flex-row justify-end'>
                  <div className='text-right'>
                    <Button type="base" text={"Cancel"} clickFunction={handleCancel} className="mb-5 mr-2" />
                  </div>
                  <div className='text-right'>
                    <Button type="red" text={"Delete link"} clickFunction={handleDelete} className="mb-5 mr-5" />
                  </div>
                </div>
              </form>
            </Modal>
          </span>
        </div>
      </div>
    </>
  );
};

export default Link;
