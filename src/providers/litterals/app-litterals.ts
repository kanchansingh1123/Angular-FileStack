/*
	local - http://localhost:3003/,
	dev - https://dev-sales.incred.com,
	Uat -  https://uat-sales.incred.com,
	prod -  https://sales.incred.com
*/

interface AppLitterals {
	residenceSince: string,
	jobSince: string,
	workingSince: string,
	OperatingSince: string,
	dob:string,
	mobile: string,
	email: string,
	toastOptions: any,
	anotherUser: any,
	url: string,
	required: string,
	tenChar: string,
	twelveChar: string,
	validData: string,
	sixChar: string,
	pan: string,
	requiredData: string,
	salaryInvalidMsg: string,
	reqError: string,
	serviceError: string,
	otpError: string,
	continueError: string,
	otpSubmitError: string,
	validTOPError: string,
	lastOrFatherFieldReqMag: string,
	anotherAppRunError: string,
	fifteenChar: string,
	invalidAccnum: string,
	authenticateOptions: Array<Object>;
	profileImg: any;
	profileMsg: string;
	annualInvalidMsg:String;
	betweenTenToFifteen:String;
	primaryAcc:String;
	invalidOtpMsg:String;
	uploadImages: any;
	uploadOthers: any;
	uploadPdf: any;
	nameValidator: any;
	landline: any;
	yearOfIncorporation: any;
	yearOfStartingOperation: any;
	compareYears: any;
	invalidCardMsg:string;
	validYear: string;
	accountNum: string;
	invalidPan:string;
	invalidAadhaar:string;
	validDSA: string;
	validCompanyName: string;
	commentDateFormate: string;
	validRateOfInterest: string;
	validProcessingFee: string;
}

export const AppLitteralsConfig: AppLitterals = {
	residenceSince: 'Please enter valid Residence date',
	jobSince: 'Please enter valid business/job date',
	workingSince: "Please enter valid work since date",
	OperatingSince: 'Please enter valid Account Operating  date',
	mobile: 'Please enter valid mobile number.',
	email: 'Please enter valid email.',
	required: 'This field is required.',
	tenChar: 'Please enter at least 10 characters.',
	twelveChar: 'Please enter at least 12 characters.',
	validData: 'Please enter valid data',
	sixChar: 'Please enter at least 6 characters.',
	pan: 'Please enter valid pan card number',
	requiredData: 'Please enter required data',
	salaryInvalidMsg: 'Net monthly salary should be less or equal to Gross monthly salary',
	annualInvalidMsg:'Annual profit should be less or equal to Annual turnover',
	reqError: 'Sorry! Unable to process the request',
	serviceError: 'Error while fetching data',
	otpError: 'Oops! Unable to get the OTP',
	otpSubmitError: 'Oops! Unable to submit the OTP',
	validTOPError: 'Please enter valid otp.',
	continueError: 'Sorry! Unabale to create application.',
	lastOrFatherFieldReqMag: 'You must fill either the last name or the father\'s name.',
	anotherAppRunError : 'Oops! Another application is running.',
	dob : 'Please enter valid Date of Birth',
	fifteenChar:'Please enter at least 15 characters.',
	betweenTenToFifteen: 'Please enter account number between 5 to 30 characters.',
	invalidAccnum:'Please enter a valid account number.',
	profileImg: 'https://assets.incred.com/images/profile.jpg',
	profileMsg: 'Profile image is required',
	primaryAcc:'Select Primary Applicant',
	invalidOtpMsg:'Please enter correct otp',
	invalidCardMsg:"Please check identity card number.",
	invalidPan: "Please enter valid pan number.",
	invalidAadhaar: "Please enter valid aadhaar number",
	toastOptions: {
		type: 'error',
		body: '',
		title: 'Form validation error',
		position: 'toast-top-right',
		url: false
	},
	anotherUser: {
		type: 'info',
		body: 'Another application is running',
		title: 'Info',
		position: 'toast-top-right',
		url: false
	},
	url: 'http://localhost:3003/',
	authenticateOptions: [
		{
			value: 'AADHAR', text: 'Aadhar Card'
		}, {
			value: 'PAN', text: 'PAN Card'
		}
	],
	uploadImages: '.jpg,.jpeg,.png,.JPG,.JPEG,.PNG,',
	uploadOthers: '.jpg,.jpeg,.png,.JPG,.JPEG,.pdf,.PDF,.PNG,.BAT,.bat,.BMP,.bmp,.CSV,.csv,.CVS,.cvs,.doc,.docx,.DOC,.DOCX,.MAC,.mac,.MAP,.map,.PPT,.ppt,.PPTX,.pptx,.PSD,.psd,.PSP,.psp,.QXD,.qxd,.txt,.TXT,.RTF,.rtf,.TAR,.tar,.TIF,.tif,.XLS,.xls,.XLSX,.xlsx,.zip,.ZIP,.rar,.RAR,image/*',
	uploadPdf: '.jpg,.jpeg,.png,.JPG,.JPEG,.pdf,.PDF,.PNG,.BAT,.bat,.BMP,.bmp,.CSV,.csv,.CVS,.cvs,.doc,.docx,.DOC,.DOCX,.MAC,.mac,.MAP,.map,.PPT,.ppt,.PPTX,.pptx,.PSD,.psd,.PSP,.psp,.QXD,.qxd,.txt,.TXT,.RTF,.rtf,.TAR,.tar,.TIF,.tif,.XLS,.xls,.XLSX,.xlsx,.zip,.ZIP,.rar,.RAR,image/*',
	nameValidator: 'Accepts only Alphabets and Space',
	landline: 'Please enter valid number.',
	yearOfIncorporation: 'Please enter Year of Incorporation',
	yearOfStartingOperation: 'Please enter Year of Starting Operations',
	compareYears:'Year of Starting Operation Should be Greater than or equal to Year of Incorporation',
	validYear: 'Please enter valid Year',
	accountNum: 'Please enter valid Account Number',
	validDSA: 'Please enter valid DSA',
	validCompanyName: 'Please enter valid company name',
	commentDateFormate: 'dd/MM/yyyy hh:mm:ss a',
	validRateOfInterest: 'Please enter valid Rate Of Interest',
	validProcessingFee: 'Please enter valid Processing Fee'
}

interface LoanRequirmentLitterals {
	LOAN_AMOUNT: any,
	LOAN_TENURE: any,
	CAL_LOAN_TENURE: any
}

export const LoanRequirmentLitteralsConfig: LoanRequirmentLitterals = {
	LOAN_AMOUNT: 1,
	LOAN_TENURE: 12,
	CAL_LOAN_TENURE: 6
}
