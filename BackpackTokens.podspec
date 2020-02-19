Pod::Spec.new do |s|
  s.name = 'BackpackTokens'
  s.version = '2.3.0'
  s.license = { :type => 'ISC', :file => 'packages/backpack-tokens/LICENSE.txt' }
  s.homepage = 'https://design.showbie.com'
  s.author = 'Showbie Inc.'
  s.summary = 'Showbie Backpack design system tokens'
  s.source = { :git => 'https://github.com/showbie/backpack.git',
               :tag => "v#{s.version.to_s}" }
  s.swift_version = '4.2'
  s.ios.deployment_target = '10.0'
  s.source_files = 'packages/backpack-tokens/dist/*.swift'
end
