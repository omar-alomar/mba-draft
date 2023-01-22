import React, {useState} from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import CircleIcon from "@mui/icons-material/Circle";
import Modal from "../components/Modal";
import Button from "../components/Button";
import { useNavigate } from 'react-router-dom';



const Link = ({link}) => {
  const [links, setLinks] = useState([]);
  const [name, setName] = useState(link.name)
  const [url, setUrl] = useState(link.url)
  const [newName, setNewName] = useState("");
  const [newUrl, setNewUrl] = useState("");
  const [shouldShow, setShouldShow] = useState(false);
  const navigate = useNavigate()

  
  let handleSubmit = () => {
    navigate('/links')
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
              title="Edit Project"
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
                      onChange={(e) => setNewName(e.target.value)}
                    />
                  </div>

                  <div>
                    <label className="contacts__form__label">URL</label>
                    <input
                      className="contacts__form__input"
                      value={url}
                      type="text"
                      onChange={(e) => setNewUrl(e.target.value)}
                    />
                  </div>
                </div>
              </form>
              <hr className="mt-5 mb-5 w-full"></hr>

              <div className="text-right">
                <Button
                  type="yellow"
                  text={"Edit link"}
                  clickFunction={handleSubmit}
                  className="mb-5 mr-5"
                />
              </div>
            </Modal>
          </span>
          <span className="text-gray-500 hover:text-red-500 cursor-pointer">
            <DeleteIcon />
          </span>
        </div>
      </div>
    </>
  );
};

export default Link;
