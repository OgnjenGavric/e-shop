"use client"

import Container from '../Container'
import Link from 'next/link'
import AdminNavItem from './AdminNavItem'
import { MdDashboard, MdDns, MdFormatListBulleted, MdLibraryAdd } from 'react-icons/md'
import { usePathname } from 'next/navigation'

const AdminNav = () => {
  const pathname = usePathname()

  return (
    <div className='w-full sha top-20 border-b-[1px] pt-4'>
      <Container>
        <div className='flex flex-row flex-nowrap items-center justify-between md:justify-center gap.8 md:gap-12 overflow-x-auto'>
          <Link href="/admin">
            <AdminNavItem label='Summary' icon={MdDashboard} selected={pathname === "/admin"} />
          </Link>
          <Link href="/admin/add-products">
            <AdminNavItem label='AddProducts' icon={MdLibraryAdd} selected={pathname === "/admin/add-products"} />
          </Link>
          <Link href="/admin/manage-products">
            <AdminNavItem label='ManageProducts' icon={MdDns} selected={pathname === "/admin/manage-products"} />
          </Link>
          <Link href="/admin/manage-orders">
            <AdminNavItem label='ManageOrders' icon={MdFormatListBulleted} selected={pathname === "/admin/manage-orders"} />
          </Link>
        </div>
      </Container>
    </div>
  )
}

export default AdminNav