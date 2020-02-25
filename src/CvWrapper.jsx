import React from 'react'
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import Cv from './Cv'


const CvWrapper = () => {
	return (
		<>
			<PDFViewer style={{ width: "100vw", height: "80vh" }}>
				<Cv />
			</PDFViewer>
			<PDFDownloadLink document={<Cv />} fileName="daniels_cv.pdf">
				{({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
			</PDFDownloadLink>
		</>
	)
}

export default CvWrapper
