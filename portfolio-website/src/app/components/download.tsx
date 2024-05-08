import React from 'react'
import { FaFileDownload } from "react-icons/fa";

export default function DownloadResume() {
  return (
    <a href="/SamCook-Resume.pdf" download="samcook-resume"><FaFileDownload size={20} /></a>
  )
}
