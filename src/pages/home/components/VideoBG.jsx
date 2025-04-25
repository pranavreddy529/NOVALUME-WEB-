import BG from '../../../assets/BG_Video.mp4'

export default function VideoBG(){
    return (
        <div className="BG absolute inset-0 w-full h-full overflow-hidden">
            <video 
                autoPlay 
                muted
                playsInline
                className="w-full h-full object-cover"
                src={BG} 
                type="video/mp4"
            />
        </div>
    )
}