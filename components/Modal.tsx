import { useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState, movieState } from '../atoms/modalAtom'
import ReactPlayer from 'react-player/lazy'
import { FaPlay } from 'react-icons/fa'
import { CheckIcon, PlusIcon, ThumbUpIcon, VolumeOffIcon, VolumeUpIcon, XIcon } from '@heroicons/react/outline'
import { Element, Genre, Movie } from '../typings'
import MuiModal from '@mui/material/Modal'
import { collection, deleteDoc, doc, DocumentData, onSnapshot, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import useAuth from '../hooks/useAuth'
import toast, { Toaster } from 'react-hot-toast'

function Modal() {
  	const [showModal, setShowModal] = useRecoilState(modalState)

	return (
		<div>Modal</div>
	)
}

export default Modal