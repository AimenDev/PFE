import residentmodel from '../models/Demande.js';


const demande =async(req,res)=>{
    try {
        const {nom,prénom,phone,type_de_demande,message}=req.body
     const Newdemande=  new residentmodel({
      nom,prénom,phone,type_de_demande,message
     })
     await Newdemande.save()
  
     res.status(200).json({success:true,message:"Demande enregistré Successfully.", Newdemande})
    } catch (error) {
      console.log(error)
    return  res.status(500).json({success:false,message:"Interl server eror"})
    }
  }

export { demande };