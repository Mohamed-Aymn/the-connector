import Section from '@/components/shared/layout/section'
import Heading from '@/components/shared/typography/heading'
import React from 'react'
import { Card, CardAction, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useTranslations } from 'next-intl'
import { CheckCircle, User, Briefcase, FileText, Clock, CreditCard, Home, Laptop, Shield } from 'lucide-react'

function HowDoesItWork() {
  const t = useTranslations("Services.StaffAugmentation.howDoesItWorkSection")

  const workflowItems = t.raw("Workflow.items") as string[]
  const workflowIcons = [CheckCircle, FileText, Clock, CreditCard, Briefcase, FileText] // pick icons for workflow

  const benefitItems = t.raw("EmployeesBenefits.items") as string[]
  const benefitIcons = [User, Shield, FileText, Home, Laptop] // pick icons for benefits

  return (
    <Section type='outer'>
      <Heading className='text-primary mb-6' size='md'>
        {t("title")}
      </Heading>

      {/* Workflow */}
      <Heading className='text-primary mb-4' size='sm'>
        {t("Workflow.title")}
      </Heading>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
        {workflowItems.map((item, index) => {
          const Icon = workflowIcons[index] || CheckCircle
          return (
            <Card key={index} className="w-full max-w-sm">
              <CardHeader className="flex justify-between items-center">
                <Heading size={'sm'} className='text-left'>
                  Step {index + 1}
                </Heading>
                <CardAction>
                  <Button variant="link">
                    <Icon className="w-5 h-5" />
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                {item}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Employee Benefits */}
      <Heading className='text-primary mb-4' size='sm'>
        {t("EmployeesBenefits.title")}
      </Heading>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {benefitItems.map((item, index) => {
          const Icon = benefitIcons[index] || User
          return (
            <Card key={index} className="w-full max-w-sm">
              <CardHeader className="flex justify-between items-center">
                <Heading size={'sm'} className='text-left'>
                  {item}
                </Heading>
                <CardAction>
                  <Button variant="link">
                    <Icon className="w-5 h-5" />
                  </Button>
                </CardAction>
              </CardHeader>
            </Card>
          )
        })}
      </div>
    </Section>
  )
}

export default HowDoesItWork
