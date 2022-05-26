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
    const showModal = useRecoilValue(modalState)

	return (
		<MuiModal open={showModal} onClose={handleClose} className="fixed !top-7 left-0 right-0 z-50 mx-auto w-full max-w-5xl overflow-hidden overflow-y-scroll rounded-md scrollbar-hide">
			Modal
		</MuiModal>
	)
}

export default Modal