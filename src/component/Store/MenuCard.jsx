import { Accordion, AccordionDetails, AccordionSummary, Button } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'

const MenuCard = () => {
  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between'>
            <div className='lg:flex items-center lg:gap-5'>
                <img 
                    className='w-[7rem] h-[10rem] object-cover' 
                    src="https://product.hstatic.net/200000343865/product/1_d295818bf0c54c01a64027f9c986b891_master.jpg" 
                    alt="" />
                <div className='space-y-3 lg:space-y-5 lg:max-w-2xl'>
                    <p className='font-semibold text-xl'>Solo Leveling</p>
                    <p>9$</p>
                    <p className='text-gray-400'>SUNG JIN WOO, THỢ SĂN HẠNG E YẾU ỚT BẬC NHẤT nghèo khổ, tài năng không có mà cũng chẳng được ai chống lưng. Trong một chuyến công phá để kiếm kế sinh nhai, cậu tình cờ tìm thấy HẦM NGỤC KÉP. Trên chiến trường tàn khốc, cậu đã lựa chọn con đường cô độc nhất…</p>
                </div>
            </div>

          </div>
        </AccordionSummary>
        <AccordionDetails>
          <form>
            <div>
                <Button variant='contained' disabled={false} type='submit'>
                    {true?"Add to Cart":"Out Of Stock"}
                </Button>
            </div>
          </form>
        </AccordionDetails>
    </Accordion>
  )
}

export default MenuCard