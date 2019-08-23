Pod::Spec.new do |s|
  s.name = 'BackpackTokens'
  s.version = '0.2.0'
  s.license = { :type => 'ISC' }
  s.homepage = 'https://design.showbie.com'
  s.authors = { 'Jeff Nelson' => 'jeff@showbie.com' }
  s.summary = 'Design tokens for the Backpack design system at Showbie'
  s.source = { :git => 'https://github.com/showbie/backpack-tokens.git', :tag => 'v0.2.0' }
  s.swift_version = '4.2'
  s.ios.deployment_target = '10.0'
  s.source_files = 'dist/*.swift'
end
